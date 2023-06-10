// This version of the script is ExtendScript-only and is independent of the 
// functions provided by the UXPScriptSparker framework

var FILENAME_JSON_LOOKUP_TABLE = "lookup_table.json";
var UNICODE_LOOKUP_BY_CHAR_CODE;

main();

function initUnicodeLookupTable() {

    if (! UNICODE_LOOKUP_BY_CHAR_CODE) {
        var folderThatContainsThisScript = File($.fileName).parent.fsName + "/";
        
        var lookupTablePath = folderThatContainsThisScript + FILENAME_JSON_LOOKUP_TABLE;
        
        var file = new File(lookupTablePath);

        file.encoding = "UTF8";
        file.open("r");
        var lookupTableJSON = file.read();
        file.close();

        eval("UNICODE_LOOKUP_BY_CHAR_CODE = " + lookupTableJSON);
    }
}

function lookupCharacterName(in_char) {

    initUnicodeLookupTable();

    var characterUnicode = in_char.charCodeAt(0);
    var characterUnicodeAsString = "" + characterUnicode;

    var retVal = UNICODE_LOOKUP_BY_CHAR_CODE[characterUnicodeAsString];

    return retVal;
}

function main() {


    var characterToLookup = "é";

    var characterName = lookupCharacterName(characterToLookup);

    if (! characterName) {
        alert("Character not found in table");
    }
    else {
        alert(characterName);
    }
}
