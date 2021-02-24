---
layout: project
title: Peerster
---
Peerster is a decentralized peer-to-peer application written in Go. Peerster implements various messaging protocols over UDP, allowing for peers to distribute text messages across the network, to send private messages via a routing scheme, to share, download and search files, and to perform naming with blockchain. The application was extended through group work to support dynamically changing peer clusters, anonymity and confidentiality of messaging within a cluster, and VoIP functionality.

## Gossiping and Rumor Mongering
![image](/images/Peerster/Gossip.png)

Gossip protocols are used for robust information exchange in dynamic network topologies where nodes can join/leave, might experience connectivity issues, etc. Such protocols are one of the simplest, fastest, and most reliable algorithms for propagating messages in a way to ensure the nodes in the network each (eventually) receive a copy of every message any of the other nodes has sent.
To achieve that, Peerster uses a rumormongering protocol:
* Every new message received by a peer is resent to a random known peer in the network
* A vector-clock is used to deal with the best-effort nature of UDP, to maintain information about previously seen messages, and to request unseen messages from peers who have seen them before
* Anti-entropy mechanism is used to periodically issue status messages which trigger exchange of unseen messages between two peers

## Routing
A _destination-sequenced distance vector_ routing scheme is used to enable nodes to send unicast, point-to-point messages to each other. Each node maintains a table of key-value pairs where the key is a destination node and the value is a _next hop_ to reach the desired destination. <br>
**NOTE:** A node knows the address of another node either because they knew them at startup, or because they have previously received a message from them. <br>
In addition, there is an option for a node to periodically send _route rumors_ to announce themselves and to enable other nodes to add them to their routing tables.

## File Sharing
UDP works reliably only with short datagrams, so when a node wants to share a file with other nodes in the network, the file is sent in chunks. Peerster performs the following steps:
* **File Indexing** - Peerster first scans each file, divides it into chunks of 8KB, and computes the SHA-256 hash code of the contents of each chunk.
* **Metafile** - Peerster builds a metafile which contains all of the SHA-256 hashes for the file concatenated with each other

## File Downloading
File downloading is implemented via a one-chunk-at-a-time request/response protocol. At this stage, it is assumed that the requesting node has the _metahash_ of the desired file's metafile. The requesting node sends a request for the metafile's metahash and after receiving it, reads the file chunks' metahashes in order and requests them. On receiving the last chunk, the whole file is reconstructed.

## File Search
Here Peerster is enabled to search files by keywords, using an _expanding-ring flooding scheme_. The searching node simply sends a search request with desired keywords and a given budget. A receiving node searches locally for files matching any of the keywords, decreases the budget of the search request, and redistributes it further to as many of it's neighbors as the remaining budget. If a node has a match, it sends a search reply with information about the chunks of the file it has locally. Peerster supports partial matches - e.g., if node A has the first chunk of a two-chunk file and node B has the second chunk, a subsequent download (once all chunks have been found) would request the two chunks from the respective nodes.

## Naming With Blockchain
Peerster builds a blockchain of shared files to ensure a globally agreed on name-to-metahash mapping in order to protect against adversarial peers. Whenever a node wants to share a file, it sends a publish block with the file name, file size, and metafile hash and waits for a majority confirmation. <br>
**NOTE:** At this point, the number of peers in the network is fixed and known (e.g. it is assumed that no peers join or leave/drop)

## Demo

**1.** Rumor messages received by the current peer <br>
**2.** Addresses of other nodes the current peer knows directly (e.g. from startup or by receiving a message from them) <br>
**3.** Names of other nodes the current peer knows of (e.g. has routing information to them) <br>
**4.** List of files the current peer has (e.g. either shared by the peer or downloaded from other peers); in this example they are all shared <br>
![image](/images/Peerster/General.jpg)

**5.** Private chat history between current node _Clara_ and one of the peers it knows of, _Alice_ <br>
**6.** Similar to *4*, but in this example the file has been downloaded from another peer (the destination node) by requesting the file's hash and specifying _BeautifulPicture.jpg_ as the name for the file to be saved as <br>
![image](/images/Peerster/Download_Private.jpg)

**7.** File search results for the keyword _image_; in the shared/downloaded files tab show that the files have also been downloaded <br>
**8.** Name-to-hash mappings that have been confirmed and the current node knows of <br>
![image](/images/Peerster/PublishBlock_Search.jpg)

## Remarks
A small part of the initial codebase has been taken from an anonymous student (allowed by the professor), due to better design and lack of time to restructure my original code for the respective functionality. Since then, the code in question has been adapted, changed, and optimized as needed.

Explore the source code [here](https://github.com/AleksandarHr/Peerster){:target="_blank"}.

## Poorster - Group Project Extension
Very briefly, the project extension focuses on creating clusters of peers. An existing cluster can accept new members or remove current ones using a majority voting protocol. Inside a cluster, peers can communicate with _confidentiality_ and _anonymity_. Voice over Internet Protocol (VoIP) support was also implemented. For more details, you can watch the project presentation followed by a demo:

{% include youtube_embed.html id="7XeKpmRIy_I" %}  

Explore the source code [here](https://github.com/lanzrein/Poorster){:target="_blank"}.

_The Poorster project was implemented in collaboration with Johan Lanzrein & Vincent Rinaldi._
