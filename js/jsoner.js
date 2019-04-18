/*
json数据的操作方法
 */

//获取数据
function getDatas(urls){
    let results;
    $.ajax({
        url : "http://localhost:8080/" + urls,
        type : "post",
        async : false,
        success : function (data) {
             results = data;
        },
        error : function (err) {
            console.log(err)
            alert("数据获取失败!");
            return null;
        }
    });
    return results;
}

//搜索json数据并返回结果
function jsonSearch(args, sob = useData){
    let results = {"data": []};

    for(i in sob.data){
        if(sob.data[i].factory === args.factory || !args.factory) {
            if(sob.data[i].id === args.id || !args.id){
                if(sob.data[i].name === args.name || !args.name){
                    results.data.push(sob.data[i]);
                }
            }
        }
    }

    results["status"] = 1;
    return results;
}

//搜索某条值
function jsonSearchKey(key, args, sob = useData){
    let results;

    for(i in sob.data){
        if(sob.data[i].factory === args.factory || !args.factory) {
            if(sob.data[i].id === args.id || !args.id){
                if(sob.data[i].name === args.name || !args.name){
                    results = sob.data[i][key];
                }
            }
        }
    }

    return results;
}

//末尾追加值,添加成功则返回１
function jsonPush(vals, cdataName = dataName) {
    return getDatas("changeJsonData?cur=" + cdataName + "&datas=" + vals);
}