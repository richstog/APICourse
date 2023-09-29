export enum ObjectName {
    User = 'User',
    Access = 'Access',
    Role = 'Role'
}

export enum OperationName {
    destroy = 'delete',
    create = 'insert',
    read = 'select',
    update = 'update'
}

export class ObjectOperationOutput {
    constructor(public readonly object: ObjectName, public readonly operation: OperationName) {}
}