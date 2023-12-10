'use client'

import styles from './styles.module.css'
import Review from '../components/Review';
import ReviewTwo from './Review2';
import { useState, useRef, MouseEvent} from 'react';
import Image from 'next/image';


const firstReviews = [
    "AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.",
    "I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!",
    "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)",
    "This is an awesome platform for business AI. I'll 100% be using this. Love the fact that it's free to use and it's not a subscription pricing model, but pay per query. I'm going to have my team bookmark it now!",
   " Amazing product! Works better than ChatGPT. Being able to choose style and tone of voice makes the writing much better and you can’t even notice it’s AI. Congratulations on the great work :)",
  ];

const secondReviews = [
    "AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.",
    "I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!",
    "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)",
    "This is an awesome platform for business AI. I'll 100% be using this. Love the fact that it's free to use and it's not a subscription pricing model, but pay per query. I'm going to have my team bookmark it now!",
   " Amazing product! Works better than ChatGPT. Being able to choose style and tone of voice makes the writing much better and you can’t even notice it’s AI. Congratulations on the great work :)",
  ];



  const Reviews = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
  
    const onMouseDown = (ref: React.RefObject<HTMLDivElement>, e: MouseEvent) => {
      if (ref.current) {
        setIsDragging(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
      }
    };
  
    const onMouseMove = (ref: React.RefObject<HTMLDivElement>, e: MouseEvent) => {
      if (!isDragging || !ref.current) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 3;
      ref.current.scrollLeft = scrollLeft - walk;
    };
  
    const onMouseUp = () => {
      setIsDragging(false);
    };
  
    return (
      <div className="max-w-7xl mx-auto">
         <div className="flex flex-col items-center gap-4 max-w-7xl mx-auto">  
             <Image
             src='/img1.png'
                alt='laptop'
                    width={1040}
                    height={800}
                    className="w-1/6"
                    />
        <h3 className="max-w-xl text-4xl leading-tight text-[#222222] text-center font-semibold">
        See what our users say
        </h3>
        <p className="max-w-sm text-base font-normal text-slate-600 text-center">
        Loved by thousands, all around the World
        </p>
      </div>
        <div className={styles.wrapper}>
          <div
            ref={ref1}
            onMouseDown={(e) => onMouseDown(ref1, e)}
            onMouseMove={(e) => onMouseMove(ref1, e)}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className={styles.reviews}
          >
            {firstReviews.map((review, index) => (
              <Review key={index} text={review} />
            ))}
          </div>
          <div
            ref={ref2}
            onMouseDown={(e) => onMouseDown(ref2, e)}
            onMouseMove={(e) => onMouseMove(ref2, e)}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className={styles.reviews}
          >
            {secondReviews.map((review, index) => (
              <ReviewTwo key={index} text={review} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Reviews;