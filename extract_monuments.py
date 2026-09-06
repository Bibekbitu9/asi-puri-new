import json
import re
from docx import Document

def extract_monuments(docx_path):
    doc = Document(docx_path)
    monuments = {}
    current_id = None
    current_desc = []
    
    num_pattern = re.compile(r'^(\d+)\.\s*(.*)')
    
    def get_num(text):
        m = num_pattern.match(text)
        if m:
            return int(m.group(1))
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
            # We skip the explicit metadata prefixes so they don't duplicate in the prose description
            if not text.startswith(('Location:', 'District:', 'Geo-Coordinate:', 'Coordinates:', 'Protected Area Status:', 'Notification:', 'Period:', 'अक्षांश', 'संख्या', 'Lati.', 'S.O.', 'Lati.', 'Long.', 'ଜିଲ୍ଲା', 'ଅବସ୍ଥିତି', 'ଅଧିସୂଚନା', 'ସମୟ')):
                if text.startswith("Description: "):
                    text = text.replace("Description: ", "")
                if text.startswith("विवरण: "):
                    text = text.replace("विवरण: ", "")
                if text.startswith("ବିବରଣୀ: "):
                    text = text.replace("ବିବରଣୀ: ", "")
                
                # Append ALL text, NO cropping
                current_desc.append(text)
                
    if current_id and current_desc:
        monuments[current_id] = "\n".join(current_desc).strip()
        
    return monuments

en_mons = extract_monuments("public/Monuments_languages/ASI_Website_ENG_050926.docx")
hi_mons = extract_monuments("public/Monuments_languages/ASI_Website_HINDI_050926.docx")
od_mons = extract_monuments("public/Monuments_languages/ASI_Website_ODIA_050926.docx")

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
