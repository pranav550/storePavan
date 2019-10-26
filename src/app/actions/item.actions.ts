import { Action } from '@ngrx/store';

export enum ItemActionTypes {
    Add = 'Add',
    Remove = 'Remove',
    Edit = 'Edit'
}

export class ActionEx implements Action {
    readonly type;
    constructor(public payload: any) { }
}

export class AddItem implements Action {
    readonly type = ItemActionTypes.Add
    constructor(public payload: any) { }
}

export class RemoveItem implements Action {
    readonly type = ItemActionTypes.Remove
    constructor(public payload: any) { }
}

export class EditItem implements Action {
    readonly type = ItemActionTypes.Edit
    constructor(public payload: any) { }
}
