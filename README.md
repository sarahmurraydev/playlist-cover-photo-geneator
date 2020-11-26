## Idea:
Have spotify autogenerate a profile photo based on the songs added (like it currently does), but this time it keeps scaling the photos so that it's always a n x n (square) cover photo

## NEED: 
1) Create a photo editor that takes in an array of 2n photos and outputs a n by n cover photo. 
2) Ability to connect to spotify 



## Development: 

### Latest status of the code: 

We have been able generate a photo that is a merge of two photos: 
![image](test-images/testMerge2&3.jpeg)

Add now with the latest commit, we ensure images are the same size before merging: 
![image](test-images/testMerge2&3-make-images-same-size.jpeg)

Realized, I don't want to crop things but actually resize them (otherwise some images are weirdly zoomed in). For the first two photos, I couldn't tell this since they are reasonable sizes. But by changing to resizing we can see the code becomes much less complex and the result is the same as the previous photo (but would be different if we had a really large photo)
![image](test-images/testMerge2&3-make-images-same-size-VIA-resize.jpeg)

For example, in the next commit, we add the logic to import all the photos. Now this results in the following image being made:

![image](test-images/testMergeALL-with-resize.jpeg)

(note: this image is incorrect because it still only concates 2 photos -- we'll get to that later :smile, but it does show the difference between crop vs resize). 

If we had kept the cropping logic, since the image1 is so large, the crop would have cause a weird zoomed in effect, giving us this collage: 
![image](test-images/testMergeALL-with-crop.jpeg)

Make the merged photo's size be relative to the number of photos in the array (i.e. if there are 4 photos, make the merged photo 2x2, if there are 6 photos, still make it be 2x2 until there are at least 9 photos (then make it 3x3)). This change gives us the same image as before so its still good :+1
![image](test-images/test-n-by-n-size.jpeg)

### Next step: 
Try a bunch more photos! 