(() => {

    const fullName = (firstName:string, ...args:string[]):string => {
        return `${firstName} ${args.reduce((acc, current) => `${acc} ${current}`)}`;
    }

    const superman:string = fullName('Clark', 'Kent', 'isnot', 'batman');

    console.log(superman);
    
})()