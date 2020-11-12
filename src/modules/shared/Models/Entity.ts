export type EntityJson = {
    _id: string;
}
export abstract class Entity {
    public abstract fromPrimitives(data: any): Entity;
    public abstract toPrimitives(): any;
}