//% weight=70 icon="\uf1ec" color=#00bbd7 block="そろばん"
namespace soroban {
    //% blockId=show_strings block="数を表示 %v"
    export function showNumber(num: number = 0): void {
        let str = num.toString()
        for (let x = 5 - str.length; x < 5; x++) {
            let d = parseInt(str.substr(x - 5 + str.length, 1))
            for (let y = 0; y < 5; y++)
                (y > 0 ? (d - 5 * (d < 5 ? 0 : 1) >= y) : (d > 4)) ? led.plot(x, y) : led.unplot(x, y)
        }
    }
}
