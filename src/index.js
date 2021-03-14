module.exports = function toReadable (number) {

    let result = [];
    let temp = number;
    let num = 0;
    let ones = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if (number === 0) return 'zero';

    if(temp > 99){
        num = Math.floor(temp/100);
        temp = temp - num * 100;
        result.push(ones[num-1]);
        result.push(' hundred');
        if(temp % 100 !== 0) result.push(' ');
    }
    if(temp > 19){
        num = Math.floor(temp/10);
        result.push(tens[num-2]);
        if(temp % 10 !== 0) result.push(' ');
        temp = temp - num * 10;
    }

    num = temp - 1;
    result.push(ones[num]);

    return result.join('');
}
