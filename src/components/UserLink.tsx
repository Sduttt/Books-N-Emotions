'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const UserLink = () => {

    const { status } = useSession();

    const logOut = async () => {
        await signOut({
            callbackUrl: '/'
        });
    }

    return (
        <div>
            {status === "authenticated" ? (
                <>
                    <Link href="/orders">Orders</Link>
                    <button className='mx-4' onClick={logOut}>Logout</button>
                </>
            ) : (
                <Link href="/login">Login</Link>
            )
            }
        </div>
    )
}

export default UserLink