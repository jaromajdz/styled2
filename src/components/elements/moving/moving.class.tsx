import React from "react";

interface MoveStateT {
  left: number;
  top: number;
  leftMax: number;
  topMax: number;
  canMove: boolean;
}

export class MovingElement extends React.Component<MoveStateT | {}> {
  state: Readonly<MoveStateT> = {
    left: 0,
    top: 0,
    leftMax: 0,
    topMax: 0,
    canMove: false,
  };

  ref!: React.RefObject<HTMLDivElement>;

  constructor(props: MoveStateT) {
    super(props);
    this.ref = React.createRef<HTMLDivElement>();
  }

  setCanMove(can: boolean) {
    this.setState({ ...this.state, canMove: can });
  }

  cannotMove() {}

  stopMoving(e: MouseEvent) {
    this.setCanMove(false);
  }

  canMove() {
    this.setCanMove(true);
  }

  onMoveHandler(e: MouseEvent) {
    console.log("canMove", this.state);
    if (this.state.canMove){
    const x = this.state.left + e.movementX
    const y =  this.state.top + e.movementY
    this.setState({
      ...this.state,
      left: x<-5? this.state.left : x>(this.state.topMax - 5)? this.state.left : this.state.left + e.movementY,
      top: y<-5? this.state.top : y>(this.state.leftMax - 5)? this.state.top : this.state.top + e.movementX,
    })}
  }

  componentDidMount(): void {
    window.addEventListener("mousemove", this.onMoveHandler.bind(this));
    window.addEventListener("mouseup", this.stopMoving.bind(this));
    if(this.ref){ 
      const parentEl = this.ref.current?.parentElement?.getBoundingClientRect() 
      this.setState({...this.state, leftMax: parentEl?.width || 0, topMax: parentEl?.height || 0})
      console.log(this.state)    
   }
  
  }

  componentWillUnmount(): void {
    window.removeEventListener("mousemove", this.onMoveHandler);
    window.removeEventListener("mouseup", this.stopMoving);
  }

  render(): React.ReactNode {
    return (
      <div
        onMouseDown={this.canMove.bind(this)}
        ref={this.ref}
        style={{
          top: this.state.left + "px",
          left: this.state.top + "px",
          position: "absolute",
          zIndex: "100",
          width: "10px",
          height: "10px",
          backgroundColor: "transparent",
          border: "2px solid #ffffff",
        }}
      ></div>
    );
  }
}
