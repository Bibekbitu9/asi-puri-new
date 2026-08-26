import json
import re
from docx import Document

def extract_monuments(docx_path):
    doc = Document(docx_path)
    monuments = {}
    current_id = None
    current_desc = []
    
    # Simple regex to match "1. Name" or "1.Name" or "1. " or "୧. "
    # Odia uses ୧, ୨, ୩ etc. or 1, 2, 3. Let's match just standard digits for now, wait, Odia numbers!
    # Let's try matching any digit character in unicode.
    num_pattern = re.compile(r'^(\d+)\.\s*(.*)')
    
    # Let's also check for Odia digits
    def get_num(text):
        m = num_pattern.match(text)
        if m:
            return int(m.group(1))
        # Check odia numbers
        m_odia = re.match(r'^([୧୨୩୪୫୬୭୮୯୦]+)\.\s*(.*)', text)
        if m_odia:
            odia_to_eng = str.maketrans('୧୨୩୪୫୬୭୮୯୦', '1234567890')
            return int(m_odia.group(1).translate(odia_to_eng))
        return None

    for p in doc.paragraphs:
        text = p.text.strip()
        if not text:
            continue
            
        num = get_num(text)
        if num is not None:
            if current_id and current_desc:
                monuments[current_id] = "\n".join(current_desc).strip()
            
            current_id = num
            current_desc = []
        elif current_id is not None:
            # Skip metadata lines if they start with certain strings.
            # I'll just skip lines that are too short (like district names)
            if not text.startswith(('Location:', 'District:', 'Geo-Coordinate:', 'Notification:', 'Period:', 'अक्षांश', 'संख्या', 'Lati.', 'S.O.', 'Lati.', 'Long.', 'ଜିଲ୍ଲା', 'ଅବସ୍ଥିତି', 'ଅଧିସୂଚନା', 'ସମୟ')):
                if len(text) > 30: # Only add substantial paragraphs to description
                    current_desc.append(text)
                
    if current_id and current_desc:
        monuments[current_id] = "\n".join(current_desc).strip()
        
    return monuments

en_mons = extract_monuments("public/ASI-English-Website.docx")
hi_mons = extract_monuments("public/ASI-hindi-Website.docx")
od_mons = extract_monuments("public/ASI-odia-Website.docx")

print(f"Extracted EN: {len(en_mons)}, HI: {len(hi_mons)}, OD: {len(od_mons)}")

with open("src/data/monuments.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for m in data:
    mid = m["id"]
    if "descriptions" not in m:
        m["descriptions"] = {}
    
    if mid in en_mons and en_mons[mid]:
        m["descriptions"]["en"] = en_mons[mid]
    if mid in hi_mons and hi_mons[mid]:
        m["descriptions"]["hi"] = hi_mons[mid]
    if mid in od_mons and od_mons[mid]:
        m["descriptions"]["od"] = od_mons[mid]

with open("src/data/monuments.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated monuments.json")
