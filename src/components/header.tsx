// import { signIn, signOut, useSession } from 'next-auth/react'
// import Image from 'next/image'
// import Button from './baseComponents/button'

// export default function Header() {
//   const { data: session } = useSession()

//   return (
//     <header className="p-6 bg-white/5 border-b border-[#363739]">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between items-center">
//           <span className="text-white font-bold text-xl">Chat App</span>
//           {session ? (
//             <div className="flex space-x-1">
//               {session?.user?.image && (
//                 <div className="w-12 h-12 rounded overflow-hidden">
//                   <Image
//                     width={50}
//                     height={50}
//                     src={session?.user?.image}
//                     alt='User profile picture'
//                   />
//                 </div>
//               )}
//               <Button
//                 onClick={() => signOut()}
//                 className="bg-white/5 rounded h-12 px-6 font-medium text-white border border-transparent"
//               >
//                 Sign out
//               </Button>
//             </div>
//           ) : (
//             <div className="flex items-center">
//               <Button
//                 onClick={() => {
//                   signIn('github')
//                 }}
//                 className=" rounded h-12 px-6 font-medium text-white text-lg border border-transparent inline-flex items-center"
//               >
//                 Sign in with GitHub
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }
