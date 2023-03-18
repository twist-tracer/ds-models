import '@tensorflow/tfjs-node';
import * as toxicity from '@tensorflow-models/toxicity';

// // The minimum prediction confidence.
const threshold = 0.9;

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
toxicity.load(threshold, []).then(model => {
    const sentences = ['Are you dumb?'];

    model.classify(sentences).then(predictions => {
        predictions.forEach(prediction => {
            prediction.results.forEach(result => {
                if (result.match) {
                    console.log(prediction.label)
                    console.log(result.probabilities)
                }
            })
        })
    });
});

