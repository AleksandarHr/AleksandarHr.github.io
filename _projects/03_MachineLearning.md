---
layout: project
title: (Learning) Machine (Learning)
---

Taking up on the *Higgs Boson Machine Learning Challenge* and performing *Twitter Sentiment Analysis* to see what's all the fuss about.

## The Higgs Boson Machine Learning Challenge
The [Standard Model](https://home.cern/science/physics/standard-model){:target="_blank"} of particle physics refers to a now well-established physics theory describing the subatomic world, e.g. the fundamental building blocks of the universe and the forces that govern them, and the origin of mass of subatomic particles. Still, there are unknowns left to be explained even by this model. Three theorists came up with the [The Brout-Englert-Higgs mechanism](https://home.cern/science/physics/higgs-boson){:target="_blank"} as a solution to one such problem. They defined the so called [*Higgs Field*](https://www.youtube.com/watch?v=IElHgJG5Fe4&ab_channel=TED-Ed){:target="_blank"}, as well as a particle associated with it, the **Higgs boson**. This particle was only theoretical until 2012 when it was observed at CERN's Large Hadron Collider for the first time. Here is a very brief overview of the [Higgs Discovery](https://www.youtube.com/watch?v=so2nCu2Jkbc&list=PLAk-9e5KQYEqvdBn_fSMsuVPt-qOBhEEv&ab_channel=CERN){:target="_blank"}. <br/>

The Higgs Boson Machine Learning Challenge was a challenge posted on [Keggle](https://www.kaggle.com/c/higgs-boson){:target="_blank"} aiming at improving the discovery significance of the experiment via machine learning methods. <br/>

We performed some initial data exploration which led us to believe that the data was the result of four disjoin subsets of experiment outcomes. In addition, we found some correlation between non-existent data values for certain features and the corresponding subset. With that in mind, we tried a few different approaches at cleaning the data. Subsequently, we implemented various methods and tested their performance with **regularized logistic regression** and **ridge regression** yielding the best results. To further improve the accuracy of our models we performed some feature engineering techniques. **Feature reduction** selects a subset of features which do not have a high level of correlation and helps to reduce computational time and the probability of overfitting. **Polynomial expansion** helped us increase the accuracy significantly since it adds representational power to the otherwise linear model, allowing it to fit the data better.

:-------------------------:|:-------------------------:
![image](/images/ML/HiggsBoson_1.jpg)  |  ![image](/images/ML/HiggsBoson_2.jpg)

_Read the full report at [Detection of Higgs Boson](https://github.com/AleksandarHr/Higgs_Boson_Detection/blob/master/Detection%20of%20Higgs%20boson.pdf){:target="_blank"}._

## Twitter Sentiment Analysis
Sentiment analysis is one of the most common text analysis tasks which refers to the contextual mining of text with the goal to identify and extract subjective information and deduce the emotional expression by decide if it has a _positive_, _negative_, or _neutral_ tone. One common application of this technique is helping businesses to analyse customer feedback's sentiment with the ultimate goal to understand users' needs and improve the user experience. <br/>

For this project we worked with a large dataset of tweets which previously contained either a happy or a sad smiley emoticon. The goal of the our model is to predict which of the two a given tweet used based on the rest of the tweet's content. <br/>

Due to some common specificities of tweets such as the use of informal language, word contractions, usage of hashtags, username and URL mentions preprocessing and reformatting the data can significantly influence the accuracy of any subsequent model trained on the data. Among the techniques that we used are _tokenization_, general text cleaning such as _lower-casing_ and _contraction expansion_, _stemming_ and _lemmatization_. Handling of _hashtag expressions_ posed a challenging task. Since the space of unique hashtags is very large, keeping them as is would mean significantly increasing further computations. On the other hand, splitting a hashtag into separate words might change its meaning completely - e.g. think of **#MeToo** vs. **me too**. <br/>

Since no computer algorithm understands the meaning of words, the next step is to convert the tweets into numerical features we can feed to a machine learning model. We considered three vectorization methods - **Bag of Words (BoW)**, **Term Frequency-Inverse Document Frequency(TF-IDF)**, and **Word Embeddings**. We tested the different approaches by comparing their performance on a logistic regression model. While the word embeddings representation achieved a slightly lower accuracy than the other two (something that can be further improved) it used a significantly lower feature dimension which would entail much lower computation complexity. ![image](/images/ML/TwitterSentimentAnalysis_1.jpg) <br/>

We used the pre-trained [GloVe](https://nlp.stanford.edu/projects/glove/){:target="_blank"}
embeddings and implemented two types of models to be trained over the word embeddings - **Recurrent Neural Networks(RNN)** and **Convolutional Neural Networks(CNN)**. Two major advantages of those models are that they both retain the property that tweets are *ordered word sequences* rather than a set of words and they allow for the words to be added to the vocabulary by fine tuning the embedding matrix during the training stage. After implementing batch-normalization and dropout layers to improve convergence speed and to regularize the training, the two models were observed to yield comparable results of around 84%. We performed K-Means algorithm as a post-processing step which revealed a highly interpretable result - semantically related words clusters present in the embedding space. ![image](/images/ML/TwitterSentimentAnalysis_2.jpg)

_Read the full report at [Twitter Sentiment Analysis](https://github.com/AleksandarHr/Twitter_Sentiment_Analysis/blob/master/Twitter%20Sentiment%20Analysis.pdf){:target="_blank"}._ <br/>

Both projects were completed in collaboration with Arman Ehsasi and Thomas Stegmüller.
