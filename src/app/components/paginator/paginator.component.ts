import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  inputs: [ 'postCount', 'pageSize', 'pageIndex' ],
  outputs: [ 'pageIndexChange' ],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent   {
  constructor() {
    this.pageSize = 1;
  }

  _postCount: number;
  get postCount() {
    return this._postCount;
  }
  set postCount(value) {
    this._postCount = value;
    this.updatePageCount();
  }

  _pageSize: number;
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = value;
    this.updatePageCount();
  }

  _pageCount: number;
  updatePageCount() {
    this._pageCount = Math.ceil(this.postCount / this.pageSize);
  }

  _pageIndex: number;
  pageIndexChange = new EventEmitter();
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = value;
    this.pageIndexChange.emit(this.pageIndex);
  }

  get canMoveToNextPage() : boolean {
    return this.pageIndex < this._pageCount - 1 ? true : false;
  }

  get canMoveToPreviousPage() : boolean {
    return this.pageIndex >= 1 ? true : false;
  }

  moveToNextPage() {
    if (this.canMoveToNextPage) {
      this.pageIndex++;
    }
  }

  moveToPreviousPage() {
    if (this.canMoveToPreviousPage) {
      this.pageIndex--;
    }
  }

  moveToLastPage() {
    this.pageIndex = this._pageCount - 1;
  }

  moveToFirstPage() {
    this.pageIndex = 0;
  }
}
