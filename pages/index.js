import { useEffect, useState } from 'react';

import { chunk } from 'lodash';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

import initPhotoSwipeFromDOM from '../utilities/initPhotoSwipeFromDom';

import slides from '../data/slides';

export default function Home() {
  const amount = (slides.length + 1) / 4;
  const slidesChunk = chunk(slides, amount);

  useEffect(() => {
    initPhotoSwipeFromDOM('.my-gallery');
  }, []);
  return (
    <>
      <style jsx>{`
        .my-gallery {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          margin: 0 auto;
          // width: 100%;
        }

        .row {
          display: flex;
          padding: 0 4px;
          flex-wrap: wrap;
        }

        .column {
          flex: 25%;
          max-width: 25%;
          padding: 0 px;
        }

        .column img {
          width: 100%;
          margin-top: 4px;
          verticalalign: middle;
        }

        figure {
          margin: 4px;
        }

        @media (max-width: 800px) {
          .column {
            flex: 50%;
            max-width: 50%;
          }
        }

        @media screen and (max-width: 600px) {
          .column {
            flex: 100%;
            max-width: 100%;
          }
        }

        // .column img {
        //   margin-top: 8px;
        //   vertical-align: middle;
        // }
      `}</style>
      <div
        className='my-gallery'
        itemScope
        itemType='http://schema.org/ImageGallery'
      >
        <div className='row'>
          <div className='column'>
            {slidesChunk[0].map((slide) => (
              <figure
                itemProp='associatedMedia'
                itemScope
                itemType='http://schema.org/ImageObject'
              >
                <a
                  href={slide.src}
                  itemProp='contentUrl'
                  data-size={`${slide.w}x${slide.h}`}
                >
                  <img
                    src={slide.src}
                    itemProp='thumbnail'
                    alt='Image description'
                  />
                </a>
              </figure>
            ))}
          </div>
          <div className='column'>
            {slidesChunk[1].map((slide) => (
              <figure
                itemProp='associatedMedia'
                itemScope
                itemType='http://schema.org/ImageObject'
              >
                <a
                  href={slide.src}
                  itemProp='contentUrl'
                  data-size={`${slide.w}x${slide.h}`}
                >
                  <img
                    src={slide.src}
                    itemProp='thumbnail'
                    alt='Image description'
                  />
                </a>
              </figure>
            ))}
          </div>
          <div className='column'>
            {slidesChunk[2].map((slide) => (
              <figure
                itemProp='associatedMedia'
                itemScope
                itemType='http://schema.org/ImageObject'
              >
                <a
                  href={slide.src}
                  itemProp='contentUrl'
                  data-size={`${slide.w}x${slide.h}`}
                >
                  <img
                    src={slide.src}
                    itemProp='thumbnail'
                    alt='Image description'
                  />
                </a>
              </figure>
            ))}
          </div>
          <div className='column'>
            {slidesChunk[3].map((slide) => (
              <figure
                itemProp='associatedMedia'
                itemScope
                itemType='http://schema.org/ImageObject'
              >
                <a
                  href={slide.src}
                  itemProp='contentUrl'
                  data-size={`${slide.w}x${slide.h}`}
                >
                  <img
                    src={slide.src}
                    itemProp='thumbnail'
                    alt='Image description'
                  />
                </a>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className='pswp' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='pswp__bg'></div>

        <div className='pswp__scroll-wrap'>
          <div className='pswp__container'>
            <div className='pswp__item'></div>
            <div className='pswp__item'></div>
            <div className='pswp__item'></div>
          </div>

          <div className='pswp__ui pswp__ui--hidden'>
            <div className='pswp__top-bar'>
              <div className='pswp__counter'></div>

              <button
                className='pswp__button pswp__button--close'
                title='Close (Esc)'
              ></button>

              <button
                className='pswp__button pswp__button--share'
                title='Share'
              ></button>

              <button
                className='pswp__button pswp__button--fs'
                title='Toggle fullscreen'
              ></button>

              <button
                className='pswp__button pswp__button--zoom'
                title='Zoom in/out'
              ></button>

              <div className='pswp__preloader'>
                <div className='pswp__preloader__icn'>
                  <div className='pswp__preloader__cut'>
                    <div className='pswp__preloader__donut'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='pswp__share-modal pswp__share-modal--hidden pswp__single-tap'>
              <div className='pswp__share-tooltip'></div>
            </div>

            <button
              className='pswp__button pswp__button--arrow--left'
              title='Previous (arrow left)'
            ></button>

            <button
              className='pswp__button pswp__button--arrow--right'
              title='Next (arrow right)'
            ></button>

            <div className='pswp__caption'>
              <div className='pswp__caption__center'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
