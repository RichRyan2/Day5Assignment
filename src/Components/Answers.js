import _ from 'lodash'

export function AnswerToA () 
{
    const arrOne = [
        {id: 20, name: 'alex'}, 
        {id: 30, name: 'alina'}
    ] 
    const arrTwo = [
        {id: 40, name: 'hello'}, 
        {id: 30, name: 'world'}
    ] 
    const returnValue = {
        commonIds: _.flattenDeep([_.intersectionBy(arrOne, arrTwo, 'id'), _.intersectionBy(arrTwo, arrOne, 'id')]),
        differentIds: _.flattenDeep([_.differenceBy(arrOne, arrTwo, 'id'), _.differenceBy(arrTwo, arrOne, 'id')])
    }
    return(returnValue)
}

export function AnswerToB () 
{
    const str = ['u', 'ec']
    const arr = [
        {storageVal: 'u', table: ['E', 'F']},
        {storageVal: 'data', id: 3 }, 
        {storageVal: 'ec', table: ['E']}
    ]
    const matchedObject = new Array()
    str.forEach(element => {
        matchedObject.push(_.findKey(arr, ['storageVal', element]))
    })
    const returnValue = new Array()
    matchedObject.forEach(index => {
        returnValue.push('[' + arr[index].table + ']')
    })
    return(returnValue.join(', '))
}
export function AnswerToC ()
{
    const a = [['E'], ['F']]
    const returnValue = new Array()
    _.flattenDeep(a).forEach(index => {
        returnValue.push('\'' + index + '\'')
    })
    return(returnValue.join(', ')) 
}
export function AnswerToD ()
{
    const t = [['E', 'F'], [['F'], ['G']]]
    const returnValue = new Array()
    _.flattenDeep(t).forEach(index => {
        returnValue.push('\'' + index + '\'')
    })
    return(_.sortedUniq(returnValue).join(', '))
}
