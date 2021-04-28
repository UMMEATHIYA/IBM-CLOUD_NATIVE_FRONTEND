function add(_firstNumber,_secondNumber)
{
    return _firstNumber+_secondNumber;
}
module.exports.targetedAdd=add;

function sub(_firstNumber,_secondNumber)
{
    return _firstNumber-_secondNumber;
}
module.exports.targetedSub=sub;

function mul(_firstNumber,_secondNumber)
{
    return _firstNumber*_secondNumber;
}
module.exports.targetedMul=mul;

function div(_firstNumber,_secondNumber)
{
    return _firstNumber/_secondNumber;
}
module.exports.targetedDiv=div;