import { Inter } from "next/font/google";
import { useRouter } from "next/router";
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Age() {

  const router=useRouter();
  const handleClick=(event)=>{
    event.preventDefault();
    const age= document.querySelector('#age').value;
    if(age>=18)
    {
      router.push('/home');
    }
    else
    {
      router.push('/underAge');
    }
  }

  return (
   <div className="min-h-full flex items-center justify-center my-32 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-red-500 mt-6 text-center text-3xl font-extrabold text-gray-900">
            ENTER YOUR AGE
          </h2>
          <p className=" mt-2 text-center text-sm font-bold">
            (in years)
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className=" -space-y-px">
            <div className="flex justify-center">
              <input
                type="number" id="age"
                className="border border-red-500   font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" onClick={(event)=>handleClick(event)}>
              Submit
            </button>
          </div>
        </form>
      </div>
   
    </div>
  );
}
