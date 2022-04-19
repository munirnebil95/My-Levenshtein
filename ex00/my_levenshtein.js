function my_levenshtein(param_1, param_2){
    let index = 0;
    let i = 0;
    
    if (param_1.length != param_2.length){
        return -1;
    }
   while(index < param_1.length){
        index++;
        if(param_1[index] != param_2[index]){
            i++;
        }
    }
    return i;
}