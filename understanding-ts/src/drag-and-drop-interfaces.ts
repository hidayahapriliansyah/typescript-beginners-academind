// interface drag and drop
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(even: DragEvent): void;
    dropHandler(even: DragEvent): void;
    dragLeaveHandler(even: DragEvent): void;
  }
}
