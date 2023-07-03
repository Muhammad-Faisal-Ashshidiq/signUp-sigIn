import { postToken } from "https://jscroot.github.io/api/croot.js";
import { nyalaClick, getValue } from "https://jscroot.github.io/element/croot.js";
import { Url, GetRes} from "../config/url";

function forNyalaClick(){
    let data = {
        username : getValue("username"),
        bio : getValue("bio"),
        alamat : getValue("alamat"),
    }
    postToken(Url, "Token", "tokenfaisal", data, GetRes);
}

nyalaClick("button, forNyalaClick");