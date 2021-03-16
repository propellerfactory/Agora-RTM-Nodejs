export default class Mutex {
    private lockers;
    lock(key: string): void;
    unlock(key: string): void;
    wait(key: string): Promise<void>;
}
