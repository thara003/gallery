// import h2 from '@material-tailwind/react';
// import p from '@material-tailwind/react';

export default function Header() {
  return (
    <div class="flex justify-center items-center w-screen h-screen bg-cover bg-[url('https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80')]">
  <div class="w-1/3 h-60 relative flex flex-col justify-center items-center">
      <div class="font-medium text-xl my-3"><h1 className="text-5xl font-bold text-center">Gallery</h1></div>
      <div class="text-sm my-2"><p className="col-center-2 col-span-4 font-bold text-center">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
           euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi,
           eu consectetur nisi nisl euismod, consectetur nisi nisl euismod.
         </p></div>
  </div>
</div>
  );
}
