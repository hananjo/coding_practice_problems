function loadBalancing(k, arrival, load) {
    let requests = new Array(k).fill(0); // Array to count the number of requests each server handled
    let servers = new Array(k).fill(0);  // Array to track the next available time for each server

    for (let i = 0; i < arrival.length; i++) {
        let handled = false; // Flag to check if the request was handled

        // Try to assign the request to a server
        for (let j = 0; j < k; j++) {
            let server = (i + j) % k; // Calculate the server index in a round-robin manner
            if (servers[server] <= arrival[i]) { // If the server is available
                requests[server]++; // Increment the request count for this server
                servers[server] = arrival[i] + load[i]; // Update the server's next available time
                handled = true; // Mark the request as handled
                break; // Break out of the loop as the request is assigned
            }
        }

        // If the request was not handled, it is dropped (we do nothing in this case)
    }

    // Find the maximum number of requests handled by any server
    let max = Math.max(...requests);
    let busiest = [];

    // Collect all servers that handled the maximum number of requests
    for (let i = 0; i < k; i++) {
        if (requests[i] === max) {
            busiest.push(i);
        }
    }

    // Return the list of busiest servers sorted in ascending order
    return busiest.sort((a, b) => a - b);
}

// Example usage:
const k = 3;
const arrival = [7, 1, 2, 12, 5, 6, 30, 32];
const load = [7, 15, 10, 10, 10, 10, 15, 10];

console.log(loadBalancing(k, arrival, load)); // Expected output: [0, 1, 2]