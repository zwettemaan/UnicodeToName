import json
import unicodedata

lookup_table = {}

# Iterate over Unicode code points
for code_point in range(0x0000, 0xFFFF + 1):

    # Retrieve character name
    character_name = unicodedata.name(chr(code_point), '')

    # Add entry to the lookup table
    if character_name != "":
        lookup_table[code_point] = character_name

# Convert the lookup table to JSON
json_data = json.dumps(lookup_table, ensure_ascii=False)

# Save the JSON to a file
with open('lookup_table_with_too_many_spaces.json', 'w', encoding='utf-8') as file:
    file.write(json_data)
