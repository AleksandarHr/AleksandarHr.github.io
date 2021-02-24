---
layout: project
title: Neo, we got your back! Or um... we got his face?
---

I spent the Spring semester of 2017 doing my study abroad program at the _Aquincum Institute of Technology_ in Budapest, Hungary. A side note on the experience - the city is beautiful, vibrant, and full of history; the people are extremely friendly and welcoming. It was great fun to spend a few months there, explore and learn, meet people from all around, as well as share a flat with three other awesome exchange students! As for the project - it covers some classical Computer Vision techniques and their applications in the field of digital cinema post production.

:-------------------------:|:-------------------------:
![image](/images/FaceReplacement/FaceReplacement_2.jpg) | ![image](/images/FaceReplacement/FaceReplacement_3.jpg)

![image](/images/FaceReplacement/FaceReplacement_1.jpg)

# The Project
The program offered a wide range of topics to choose from - form graph algorithms and quantum probability, to computer graphics and android development. The course I am most happy to have taken was _Computer Vision for Digital Cinema Post Production_. It focused on classical Computer Vision algorithms and their application in tasks such as video stabilization, object detection & background subtraction, face replacement, etc. We started with a very basic skeleton code allowing for reading and writing images and individual pixels. Throughout the course of the semester the assignments were aimed at helping us build a set of tools we can later use to implement a final project of our choice. We started with the [Sobel](https://www.youtube.com/watch?v=uihBwtPIBxM&t=403s&ab_channel=Computerphile){:target="_blank"} operator - a separable edge detector, as well as simple Gaussian blur and sharpening filters. We can combine those to implement the [Harris Corner Detection](https://docs.opencv.org/master/dc/d0d/tutorial_py_features_harris.html){:target="_blank"} which is used to extract corners and infer features in an image. The Harris detector ranks the points of interest in order of how likely they are to be considered *features* in an image. <br/>
![image](/images/FaceReplacement/FaceReplacement_4.png)

Having identified a set of features we can track them and their motion in a second image - e.g. a consecutive frame or a photo of the same scene from a slightly different angle. A simple approach to find those features in the new image would be to use a sliding window to look for them. Since this solution requires a full image scan, sometimes maybe multiple scans with different window sizes, a major problem with it is its computational complexity. Single Shot MultiBox Detector (SSD) is a much more efficient alternative to the simple sliding window approach, so we implemented a simple version of SSD. Now we have two images and we have identified how the features' locations changed from one to the other. Knowing that, we can compute a transformation matrix between the two images which we use to compute the [Homography Matrix](https://docs.opencv.org/master/d9/dab/tutorial_homography.html){:target="_blank"} - a matrix which relates two images on the same planar surface by an isomorphism. From this matrix we can extract the rotation and translation of the camera.<br/>

Here comes the fun part. Breaking a video down to frames gives us a set of consecutive images which can be paired up and, in this way, we can perform everything mentioned above throughout the duration of the whole video. We shot a short video and created a face mask for the face of one of the people in it, using the first frame of the video. Then, we detected and tracked the face of the person and computed the homography matrix between the frames which we used to compute the respective distortion of the face mask from one frame to another which resulted in morphing it accordingly:

{% include youtube_embed.html id="Z9yH6xxAOxE" %}  

<!-- :-------------------------:|:-------------------------:
![image](/images/FaceReplacement/FaceReplacement_5.png) | ![image](/images/FaceReplacement/FaceReplacement_6.png) -->

Unfortunately, we did not have the time to implement our initial more ambitious idea - to have a mass face-replacement of a larger group of people using the face from the end of the video and shoot a more dynamic scene. Remind you of something? <br/>


<!-- Watch the face replacement project [demo](https://www.youtube.com/watch?v=Z9yH6xxAOxE){:target="_blank"}. <br/> -->
Explore the source code [here](https://github.com/AleksandarHr/ComputerVisionForPostProduction){:target="_blank"}. <br/>

_The project was implemented in collaboration with Hermon Deres._
