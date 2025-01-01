import Link from 'next/link';
import React from 'react';

const DropdownItems = () => {
    return (
        <div className="grid grid-cols-6 gap-8 justify-items-center p-4 bg-gray-100">
            <div>
                <h3 className="text-xl text-slate-800 mb-2">Men</h3>
                <ul className="space-y-1 text-slate-700 text-[14px]">
                    <li><Link href="/products/men/t-shirt">T-shirt</Link></li>
                    <li><Link href="/products/men/t-shirt-raglan">T-shirt (Raglan)</Link></li>
                    <li><Link href="/products/men/t-shirt-cut-stitch">T-shirt (Cut & Stitch)</Link></li>
                    <li><Link href="/products/men/t-shirt-sports">T-shirt (Sports Edition)</Link></li>
                    <li><Link href="/products/men/t-shirt-blanks">T-shirt (Blanks)</Link></li>
                    <li><Link href="/products/men/full-sleeve-tshirt">Full Sleeve T-shirt</Link></li>
                    <li><Link href="/products/men/full-sleeve-raglan">Full Sleeve (Raglan)</Link></li>
                    <li><Link href="/products/men/full-sleeve-cut-stitch">Full Sleeve (Cut & Stitch)</Link></li>
         
        
      
                </ul>
            </div>
            <div>
                <h3 className="text-xl text-slate-800 mb-2">Women</h3>
                <ul className="space-y-2 text-slate-700 text-[14px]">
                    <li><Link href="/products/women/kurti-tunic-tops">Kurti, Tunic & Tops</Link></li>
                    <li><Link href="/products/women/t-shirt">T-shirt</Link></li>
                    <li><Link href="/products/women/comfy-trouser">Comfy Trouser</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl text-slate-800 mb-2">Kids</h3>
                <ul className="space-y-2 text-slate-700 text-[14px]">
                    <li><Link href="/products">T-shirt</Link></li>
                    <li><Link href="/products/kids/maggie">Maggie</Link></li>
                    <li><Link href="/products/kids/plain-t-shirt">Plain T-shirt</Link></li>
                    <li><Link href="/products/kids/full-sleeve-t-shirt">Full Sleeve T-shirt</Link></li>
                    <li><Link href="/products/kids/polo-t-shirt">Polo T-shirt</Link></li>
                    <li><Link href="/products/kids/shorts">Shorts</Link></li>
                    <li><Link href="/products/kids/trouser">Trouser</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl text-slate-800 mb-2">Face Mask</h3>
                <ul className="space-y-2 text-slate-700 text-[14px]">
                    <li><Link href="/products">Professional 7 Layer Mask</Link></li>
                    <li><Link href="/products">Sports Edition</Link></li>
                    <li><Link href="/products">Women's Designer Edition</Link></li>
                    <li><Link href="/products">Women's Embroidery Edition</Link></li>
                    <li><Link href="/products">Kids Face Mask</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl text-slate-800 mb-2">Sports</h3>
                <ul className="space-y-2 text-slate-700 text-[14px]">
                    <li><Link href="/products">Football Jersey</Link></li>
                    <li><Link href="/products">Sports T-shirt</Link></li>
                    <li><Link href="/products">Maggie (Single Jersey)</Link></li>
                    <li><Link href="/products">Shorts</Link></li>
                    <li><Link href="/products">Underwear</Link></li>
                    <li><Link href="/products">Socks</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownItems;
