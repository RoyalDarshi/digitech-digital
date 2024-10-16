// Podcast.js
import React from 'react';
import styles from './Podcast.module.css';

const podcasts = [
    {
        title: 'Episode 1: Introduction to Digital Marketing',
        description: 'In this episode, we discuss the fundamentals of digital marketing and how it has evolved over the years.',
        imageUrl: 'https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg',
    },
    {
        title: 'Episode 2: SEO Basics',
        description: 'Learn the basics of Search Engine Optimization and its importance for online visibility.',
        imageUrl: 'https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg',
    },
    {
        title: 'Episode 3: Content Marketing Strategies',
        description: 'Discover effective content marketing strategies that can boost your brand’s presence online.',
        imageUrl: 'https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg',
    },
    {
        title: 'Episode 4: Social Media Marketing',
        description: 'Explore the world of social media marketing and how to leverage it for your business.',
        imageUrl: 'https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg',
    },
];

const Podcast = () => {
    return (
        <div className={styles.podcastPage}>
            <header className={styles.podcastHeader}>
                <div className={styles.podcastBanner}>
                    <h1 className={styles.podcastTitle}>Welcome to Our Podcast</h1>
                    <p className={styles.podcastIntro}>
                        Join us as we explore the latest trends in digital marketing and provide valuable insights for professionals in the field.
                    </p>
                </div>
            </header>

            <section className={styles.podcastEpisodes}>
                <h2 className={styles.episodeSectionTitle}>Latest Episodes</h2>
                <div className={styles.podcastList}>
                    {podcasts.map((podcast, index) => (
                        <div className={styles.podcastCard} key={index}>
                            <img src={podcast.imageUrl} alt={`Podcast Episode ${index + 1}`} className={styles.podcastImage} />
                            <h3 className={styles.podcastEpisodeTitle}>{podcast.title}</h3>
                            <p className={styles.podcastEpisodeDescription}>{podcast.description}</p>
                            <button className={styles.playButton} onClick={() => alert('Playing episode...')}>Play Episode</button>
                        </div>
                    ))}
                </div>
                <button className={styles.loadMoreButton} onClick={() => alert('Loading more episodes...')}>Load More Episodes</button>
            </section>

            <section className={styles.subscribeSection}>
                <h2 className={styles.subscribeTitle}>Subscribe to Our Podcast</h2>
                <p className={styles.subscribeText}>
                    Don’t miss out on the latest episodes! Subscribe now and get notified about new content.
                </p>
                <button className={styles.subscribeButton} onClick={() => alert('Subscribed!')}>Subscribe</button>
            </section>
        </div>
    );
};

export default Podcast;
