import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for posts
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      // Implementation will be added here
      return { 
        posts: [
          {
            id: '1',
            title: 'Getting Started with WhisperFeed',
            content: 'Welcome to WhisperFeed! This platform allows you to share your thoughts...',
            author: {
              id: '1',
              username: 'admin'
            },
            createdAt: new Date().toISOString(),
            likes: []
          },
          {
            id: '2',
            title: 'How to Create Engaging Content',
            content: 'Creating engaging content is essential for building an audience...',
            author: {
              id: '1',
              username: 'admin'
            },
            createdAt: new Date().toISOString(),
            likes: []
          }
        ] 
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData, { rejectWithValue, getState }) => {
    try {
      // Implementation will be added here
      const { auth } = getState();
      return { 
        post: {
          id: Math.random().toString(36).substring(7),
          title: postData.title,
          content: postData.content,
          author: {
            id: auth?.user?.id || '1',
            username: auth?.user?.username || 'user'
          },
          createdAt: new Date().toISOString(),
          likes: [],
          tags: postData.tags
        }
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  posts: [],
  currentPost: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPostError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all posts cases
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Create post cases
      .addCase(createPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts.push(action.payload.post);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { clearPostError } = postSlice.actions;
export default postSlice.reducer; 