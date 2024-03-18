import { Injectable } from '@angular/core';
import { Action } from '@ngxs/store';
import { CredentialDto } from '../../models/dto/credential.dto';

export class Login {
    static readonly type = '[User Login] Login';
    constructor(public credential: CredentialDto) { 
        console.log({action : credential})
    }
}

export class SignIn {
    static readonly type = '[User] SignIn';
    constructor(public credential: CredentialDto) { }
}