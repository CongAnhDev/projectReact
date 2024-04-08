function arrToObj(arr){
    return arr.reduce((obj, vals) => {
        obj[vals[0]] = vals[1]
        return obj;
    }, {});
}