import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useAuth } from '../context/AuthContext';

const styles = {
  form: { marginTop: '0.5rem', display: 'flex', gap: '0.5rem' },
  input: {
    flex: 1,
    padding: '0.4rem',
    borderRadius: '4px',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: '#fff'
  },
  btn: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#059669',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

function SubmitFeedbackBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} style={styles.btn}>
      {pending ? 'Posting...' : 'Post Feedback'}
    </button>
  );
}

function FeedbackForm({ targetId, onAddFeedback }) {
  const { user } = useAuth();

  async function feedbackAction(prevState, formData) {
    const text = formData.get('feedback');
    if (!text) return { error: 'Empty feedback!' };

    await new Promise((res) => setTimeout(res, 400));

    // Save author information alongside feedback text
    onAddFeedback(targetId, {
      text,
      author: user?.name || 'Anonymous',
      role: user?.role || 'user'
    });

    return { error: null, success: true };
  }

  const [state, formAction] = useActionState(feedbackAction, { error: null });

  return (
    <form action={formAction} style={styles.form}>
      <input name="feedback" placeholder="Add feedback..." style={styles.input} />
      <SubmitFeedbackBtn />
    </form>
  );
}

export default FeedbackForm;