import Image from 'next/image';

interface Review {
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
    avatar: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "John Smith",
        role: "Business Owner",
        comment: "The best insurance service I've ever used. Quick, efficient, and reliable.",
        rating: 5,
        avatar: "/avatars/avatar1.jpg"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Freelancer",
        comment: "Great coverage options and excellent customer service. Highly recommended!",
        rating: 5,
        avatar: "/avatars/avatar2.jpg"
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Contractor",
        comment: "Very professional and affordable insurance solutions.",
        rating: 4,
        avatar: "/avatars/avatar3.jpg"
    }
];

const ReviewSection = () => {
    return (
        <section className="py-12 mt-8">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="relative w-12 h-12 mr-4">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{review.name}</h3>
                                    <p className="text-gray-600 text-sm">{review.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                {[...Array(review.rating)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;