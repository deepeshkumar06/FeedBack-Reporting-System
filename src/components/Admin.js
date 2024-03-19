import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sentiment from 'sentiment'; // Import sentiment package

export default function Admin() {
    const [post, setPost] = useState([]);
    const [pop, setPop] = useState(false);
    const [usage, setUsage] = useState('');
    const [motivation, setMotivation] = useState('');
    const [feature, setFeature] = useState('');
    const [feedback, setFeedback] = useState('');
    const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/feedback')
            .then(res => {
                const processedData = res.data.map(item => {
                    // Analyze sentiment for each feedback item
                    const sentiment = new Sentiment();
                    const sentimentResult = sentiment.analyze(item.feedback);
                    const sentimentLabel = getSentimentLabel(sentimentResult.score);
                    return { ...item, sentiment: sentimentLabel };
                });
                setPost(processedData);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/feedback/${id}`)
            .then(res => {
                console.log(res.data);
                setPost(post.filter(item => item.id !== id));
            })
            .catch(err => console.log(err));
    }

    const openpop = (id) => {
        const feedback = post.find(item => item.id === id);
        setUsage(feedback.usage);
        setMotivation(feedback.motivation);
        setFeature(feedback.feature);
        setFeedback(feedback.feedback);
        setSelectedFeedbackId(id);
        setPop(true);
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/feedback/${selectedFeedbackId}`, {
            usage: usage,
            motivation: motivation,
            feature: feature,
            feedback: feedback
        })
            .then(res => {
                console.log(res.data);
                // Reset form fields and close the popup after successful update
                setUsage('');
                setMotivation('');
                setFeature('');
                setFeedback('');
                setPop(false);
            })
            .catch(err => console.log(err));
    }

    // Function to get sentiment label based on sentiment score
    const getSentimentLabel = (score) => {
        if (score > 0) {
            return 'Good';
        } else if (score < 0) {
            return 'Bad';
        } else {
            return 'Neutral';
        }
    }

    return (
        <div className='admin'>
            <h1>Admin Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Feedback</th>
                        <th>Sentiment</th> {/* New column for sentiment score */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                Usage: {item.usage}<br />
                                Motivation: {item.motivation}<br />
                                Feature: {item.feature}<br />
                                Feedback: {item.feedback}
                            </td>
                            <td>{item.sentiment}</td> {/* Display sentiment label */}
                            <td>
                                <button onClick={() => openpop(item.id)}>Update</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {pop && (
                <form onSubmit={handleUpdate} className='pop'>
                    <button onClick={() => setPop(false)}>X</button>
                    <h3>How often do you use our app?</h3>
                    <input type="text" placeholder='Everyday/once a week/bi-weekly' value={usage} onChange={(e) => setUsage(e.target.value)} />
                    <h3>What is the motivation to use our app?</h3>
                    <input type="text" placeholder='What problem does it solve for you?' value={motivation} onChange={(e) => setMotivation(e.target.value)} />
                    <h3>What is your most used feature?</h3>
                    <input type="text" value={feature} onChange={(e) => setFeature(e.target.value)} />
                    <h3>What is the Feedback you want to give for us?</h3>
                    <input type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    <br /><br /><br />
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    )
}
