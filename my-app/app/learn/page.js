import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#d2e823]  to-[#254f1a] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h1 className='text-[#254f1a] text-3xl font-bold  ' >Learn </h1>
       <hr className='h-1   bg-[#254f1a]  w-full'/>

       <p className='font-semibold text-white/80'>Managing your online presence across multiple platforms can be overwhelming. You create, share, sell, and promote content everywhere—but keeping all your links organized and accessible in one place is a challenge.
That’s where Linktree makes life easier.

Linktree is a simple, powerful tool that brings all your important links together into one clean, shareable page. Instead of constantly updating your bio on every platform, you get a single link that leads your audience to everything you want them to see—your social profiles, website, portfolio, shop, playlists, videos, products, and more.

With Linktree, you never have to choose just one link again.

Whether you’re a creator, business owner, influencer, student, freelancer, or brand, Linktree helps you share your digital world effortlessly. It saves time, improves reach, and makes navigation simpler for everyone who interacts with you. Your audience gets instant access to all your content, while you stay in control of how you present yourself online.

Linktree removes friction, boosts visibility, and gives you a centralized hub where your entire online identity comes together beautifully.
It’s fast, customizable, mobile-friendly, and works seamlessly across Instagram, TikTok, YouTube, Facebook, Twitter, LinkedIn, and more.

In a world where your online presence matters more than ever, Linktree empowers you to share more, connect deeper, and grow without limits—one link at a time.</p>
       <h1 className='text-[#254f1a] text-3xl font-bold ' >How to use it ? </h1>
       <hr className='h-1 bg-[#254f1a] w-full'/>
      <ul  className='text-white/80 font-semibold list-disc'>
  <li>Inside your dashboard:</li>
  
    <li>Click “Add Link”</li>
    <li>Enter the title (ex: YouTube Channel, Instagram, Portfolio, Store)</li>
    <li>Paste your URL</li>
    <li>Save</li>
  
  <li>Your links will instantly appear on your public page.</li>
  <li>You can add as many as you want — social links, videos, stores, blogs, playlists, products, anything you want to show your audience.</li>
</ul>

      
      </div>
    </div>
  );
};

export default Contact;