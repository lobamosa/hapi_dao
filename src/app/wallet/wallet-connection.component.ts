import { Component } from '@angular/core';
import { ethers } from "ethers";
import { BehaviorSubject } from 'rxjs';
declare var window: any
@Component({
    selector: 'wallet',
    templateUrl: './wallet-connection.component.html',
    styleUrls: ['./wallet-connection.component.css']
})
export class WalletConnectionComponent{
    public connected_wallet: BehaviorSubject<any> = new BehaviorSubject(false);
    async connect_wallet()
    {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        this.connected_wallet.next(true);
        console.log(this.connected_wallet.value)
        console.log('debug')
    }
}