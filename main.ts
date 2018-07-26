//% weight=70 icon="\uf1ec" color=#00bb7 block="そろばん"
namespace soroban {
		//% blockId=show_strings block="数を表示 %v"
    export function showNumber(text: number = 0): void {
        for (let x = 5 - text.toString().length; x < 5; x++)
            (((d: number) => {
                for (let y = 0; y < 5; y++)
                    (y > 0 ? (d - 5 * (d < 5 ? 0 : 1) >= y) : (d > 4)) ? led.plot(x, y) : led.unplot(x, y)
            })(parseInt(text.toString().substr(x - 5 + text.toString().length, 1))))
    }
}
