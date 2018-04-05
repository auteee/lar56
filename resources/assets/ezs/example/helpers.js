//获取模板字符串
export function getTemCodeArr(strArr) {
    return strArr.map((str)=>{
        let obj={};
        let start=str.indexOf('<template>');
        let end='<\/template>';
        let lasthtml=str.lastIndexOf(end);
        obj.html=str.slice(start,lasthtml+end.length);
        let js=str.match(/<script.*?>([\s\S]+?)<\/script>/);
        if(js){
            obj.js=js[0]
        }
        let style=str.match(/<style.*?>([\s\S]+?)<\/style>/);
        if(style)
            obj.style=style[0];
        return obj;
    });
}