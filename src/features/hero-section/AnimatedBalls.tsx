function AnimatedBalls() {
  return (
    <>
      <div className="absolute bottom-20 left-[15%] w-6 h-6 bg-green-400 rounded-full opacity-70 animate-float " />
      <div className="absolute top-1 left-[10%] w-10 h-10 bg-primary opacity-20 rounded-full  animate-float" />
      <div className="absolute bottom-20 right-[60%] w-12 h-12 bg-blue-300 opacity-50 rounded-full animate-parallax" />
      <div className="absolute top-20 right-[70%] w-8 h-8 bg-yellow-300 rounded-full opacity-70  animate-parallax" />
    </>
  );
}
export default AnimatedBalls;
