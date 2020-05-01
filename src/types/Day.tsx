export default interface Day {
    isWorkDay: boolean, 
    workHours: {
        start: string, 
        end: string
    }
};