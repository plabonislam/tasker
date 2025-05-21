function AnimatedBalls() {
  return (
    <>
      <div className="absolute bottom-32 left-[15%] w-6 h-6 bg-green-400 rounded-full opacity-70 animate-float " />
      <div className="absolute top-50 left-[10%] w-10 h-10 bg-primary opacity-20 rounded-full  animate-float" />
      <div className="absolute top-50 right-[65%] w-8 h-8 bg-yellow-300 rounded-full opacity-70  animate-parallax" />
    </>
  );
}
export default AnimatedBalls;
