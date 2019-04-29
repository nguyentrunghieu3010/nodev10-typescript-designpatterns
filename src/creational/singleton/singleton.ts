export class Singleton {
    // A variable which stores the singleton object. Initially, the variable acts like a placeholder
    private static singleton: Singleton;

    // This is how we create a singleton object
    public static getInstance(): Singleton {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    }

    // private constructor so that no instance is created
    private constructor() {
    }
}