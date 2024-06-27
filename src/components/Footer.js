import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <div>
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col menu-item justify-center items-center">
                    <label className="text-center">Turkey {">"}</label>
                </div>
            </div>
        </div>
        <div className="flex flex-row flex-wrap space-x-7 space-y-4 text-center justify-center items-center mt-10 mb-10 text-sm font-semibold">
            <Link href="#">Yardım</Link>
            <Link href="#">Alışverişlerim</Link>
            <Link href="#">İadeler</Link>
            <Link href="#">Şirket</Link>
            <Link href="#">Candy'de Çalış</Link>
            <Link href="#">Basın</Link>
            <Link href="#">Site Haritası</Link>
            <Link href="#">Özel Günler</Link>
            <Link href="#">Sürdürebilirlik</Link>
            <Link href="#">Mağazalar</Link>
        </div>
        <div className="flex flex-wrap space-x-4 justify-center items-center text-xs mb-5">
            <Link href="#">@ 2024 CANDY Tüm Hakları Saklıdır</Link>
            <p>|</p>
            <Link href="#">Gizlilik Politikası ve Çerezler</Link>
            <p>|</p>
            <Link href="#">Genel Satış Koşulları</Link>
            <p>|</p>
            <Link href="#">Etik Kanal</Link>
        </div>
    </div>

  )
}
