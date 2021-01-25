{
    // 😡
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error("not valid number!");
        }
        return arg;
    }

    //😡
    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw new Error("not valid number!");
        }
        return arg;
    }

    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error("not valid number!");
        }
        return arg;
    }

    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}
