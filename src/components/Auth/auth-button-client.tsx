"use client";
import { Check, Copy, CornerDownLeft, Grid2x2Check } from 'lucide-react';
import { type Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import CopyButton from '../Copybutton';
import { Provider } from '@supabase/supabase-js';

export function AuthButtonClient({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient();
    const router = useRouter()
    const pathname = usePathname()
    const [roomState, setRoomState] = useState("");
    const [newURL, seNewURL] = useState("");

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 9000) + 1000;
    };

    const startRoom = () => {
        const roomId = generateRandomNumber();
        setRoomState(roomId.toString());

        // Obtener la URL actual
        const currentUrl = new URL(window.location.href);

        // Verificar si "team" ya está presente en la ruta
        if (!currentUrl.pathname.startsWith('/team')) {
            // Si no está presente, agregar "team" al principio de la ruta
            currentUrl.pathname = '/team' + currentUrl.pathname;
        }

        // Establecer el parámetro "room" en la URL
        currentUrl.searchParams.set('room', roomId.toString());

        // Actualizar la URL en la barra de direcciones
        window.history.pushState({ path: currentUrl.href }, '', currentUrl.href);
        const Url = window.location.href;
        seNewURL(Url)
    };




    const AuthProviderButton = ({ provider, className, children }: { provider: Provider, className: string, children: React.ReactNode }) => {

        const handleSignIn = async () => {
            try {
                await supabase.auth.signInWithOAuth({
                    provider,
                    options: { redirectTo: 'https://poker-scrum.vercel.app/auth/callback' }
                });
            } catch (error: any) {
                console.error(`Error signing in with ${provider}:`, error.message);
            }
        };

        return (
            <button className={className} onClick={handleSignIn}>
                {children}
            </button>
        );
    };

    return (
        <div className='flex flex-col gap-2'>
            {!session && (
                <>
                    <AuthProviderButton provider="github" className="flex w-full items-center justify-between gap-2 rounded-lg border border-black bg-black p-1 pe-4 text-sm font-semibold text-white duration-300 hover:border-black hover:bg-black/80">
                        <div className="rounded-md bg-white p-1">
                            <svg width="22px" height="22px" viewBox="0 0 20 20" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                        </div>
                        <span className="w-full">Continuar con Github</span>
                    </AuthProviderButton>

                    <AuthProviderButton provider="google" className="flex w-full items-center justify-between gap-2 rounded-lg border border-blue-600 bg-blue-600 p-1 pe-4 text-sm font-semibold text-white duration-300 hover:border-blue-500 hover:bg-blue-500">
                        <div className="rounded-md bg-white p-1.5">
                            <svg width="17" height="17" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path>
                                <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path>
                                <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path>
                                <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path>
                            </svg>
                        </div>
                        <span className="w-full">Continuar con Google</span>
                    </AuthProviderButton>
                </>
            )}
            {session && (
                <div className='flex flex-col gap-2'>
                    {pathname !== '/team' && (
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 bg-blue-600 p-2 pe-4 text-sm font-semibold text-white duration-300 hover:border-blue-500 hover:bg-blue-500" onClick={startRoom}>
                            <Grid2x2Check size={16} />
                            <span>{roomState ? 'Crear nueva sala' : 'Crear sala'}</span>
                        </button>
                    )}

                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-black bg-black p-2 pe-4 text-sm font-semibold text-white duration-300 hover:border-black hover:bg-black/80" onClick={handleSignOut}>
                        <CornerDownLeft size={16} />
                        <span>Cerrar sesión</span>
                    </button>

                    {roomState ? (
                        <div className='w-full py-2 px-4 bg-green-100 rounded-lg flex justify-between items-center text-center'>
                            <span className='w-full'>{roomState}</span>
                            <CopyButton url={newURL} />
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}
