import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog'
import { Textarea } from '../components/ui/textarea'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { submitStory } from '@/services/api'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { closeDialog, updateFormData } from '@/store/features/storySlice'

export function StoryDialog() {
  const dispatch = useDispatch();
  const { isDialogOpen, formData } = useSelector((state) => state.story);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitStory(formData);
      toast.success("Your Story has been shared", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        style: {
          border: '1px solid #333',
          borderRadius: '12px',
          padding: '16px',
        },
        className: 'custom-toast',
      });
      dispatch(closeDialog());
    } catch (error) {
      toast.error("Failed to share story");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(updateFormData({ [id]: value }));
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={() => dispatch(closeDialog())}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Share Your Story</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input 
              id="title" 
              placeholder="Give your story a title" 
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">Your Story</label>
            <Textarea 
              id="content" 
              placeholder="Share your experience..." 
              className="min-h-[200px]"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline" type="button" onClick={() => dispatch(closeDialog())}>Cancel</Button>
            <Button type="submit">Submit Story</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 