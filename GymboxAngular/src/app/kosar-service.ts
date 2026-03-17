import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KosarItem } from './models/kosar.model';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  private readonly storageKey = 'gymbox_kosar';

  private kosarSubject = new BehaviorSubject<KosarItem[]>(this.loadFromStorage());
  kosar$ = this.kosarSubject.asObservable();

  private loadFromStorage(): KosarItem[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  private saveToStorage(items: KosarItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    this.kosarSubject.next(items);
  }

  getItems(): KosarItem[] {
    return this.kosarSubject.value;
  }

  addItem(item: KosarItem): void {
    const current = this.getItems();
    this.saveToStorage([...current, item]);
  }

  removeItem(index: number): void {
    const current = this.getItems();
    current.splice(index, 1);
    this.saveToStorage([...current]);
  }

  clearKosar(): void {
    this.saveToStorage([]);
  }
}