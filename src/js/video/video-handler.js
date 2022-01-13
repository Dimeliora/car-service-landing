import { videoElms } from './video-dom-elements';
import { getScrollWidth } from '../helpers/get-scroll-width';

const VIDEO_CONTAINER_ID = 'video-frame';
const scrollWidth = getScrollWidth();
let videoPlayer;

const openVideoModalHandler = () => {
    videoElms.videoModalElm.classList.add('modal--visible');

    document.body.style.setProperty('overflow', 'hidden');
    document.body.style.setProperty('margin-right', `${scrollWidth}px`);
};

const openVideoPlayerHandler = (e) => {
    const videoId = e.currentTarget.dataset.video;

    if (!videoPlayer) {
        initializeVideoPlayer(videoId);
    }
};

const initializeVideoPlayer = (videoId) => {
    try {
        videoPlayer = new YT.Player(VIDEO_CONTAINER_ID, {
            width: '100%',
            height: '100%',
            videoId,
            playerVars: {
                autoplay: 1,
            },
            events: {
                onReady: openVideoModalHandler,
            },
        });

        videoElms.videoContainerElm.classList.remove('video__player--error');
    } catch (error) {
        videoElms.videoContainerElm.classList.add('video__player--error');

        openVideoModalHandler();
    }
};

const closeVideoModalHandler = () => {
    if (videoPlayer) {
        videoPlayer.destroy();
        videoPlayer = null;
    }

    videoElms.videoModalElm.classList.remove('modal--visible');

    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('margin-right');
};

const overlayClickHandler = (e) => {
    if (e.target === videoElms.videoModalElm) {
        closeVideoModalHandler();
    }
};

videoElms.videoTriggerElms.forEach((trigger) => {
    trigger.addEventListener('click', openVideoPlayerHandler);
});

videoElms.videoModalElm.addEventListener('click', overlayClickHandler);

videoElms.videoModalCloseElm.addEventListener('click', closeVideoModalHandler);
