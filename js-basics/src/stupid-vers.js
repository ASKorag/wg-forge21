module.exports = function range(from: number, ...rest: number[]): number[] {
    const res: number[] = []

    /////////////////////////////////////////////////////-------------------------------------------------------

    ////////---------------- Only 1 Arg
    if (isNormDig(from) && rest.length === 0) {
        for (let i = 0; i < from; i++) {
            res.push(i)
        }
        return res
    }
    ////////---------------- 2 Args, only from is valid
    if (isNormDig(from) && rest.length === 1) {
        const to = rest[0]
        if (!isNormDig(to)) {
            return []
        }

    }
    ////////---------------- 3 Args, only from is valid
    if (isNormDig(from) && rest.length === 2) {
        const to = rest[0]
        const step = rest[1]
        if ((!isNormDig(to) && isNormDig(step)) || (!isNormDig(to) && !isNormDig(step))) {
            return []
        }

    }

    /////////////////////////////////////////////////////-------------------------------------------------------

    ////////---------------- Only 2 Arg
    if (isNormDig(from) && rest.length === 1) {
        const to = rest[0]
        if (isNormDig(to)) {
            if (from < to) {
                for (let i = from; i < to; i++) {
                    res.push(i)
                }
            } else {
                for (let i = from; i > to; i--) {
                    res.push(i)
                }
            }
        }
        return res
    }
    ////////---------------- 3 Args, only from and to are valid
    if (isNormDig(from) && rest.length === 2) {
        const to = rest[0]
        const step = rest[1]
        if ()
            }


}

function isInt(arg

? : number
)
{
    return Number.isInteger(arg)
}

function isNormDig(arg

? : number
)
{
    return (arg !== undefined && arg !== null && !Number.isNaN(arg) && Number.isFinite(arg))
}